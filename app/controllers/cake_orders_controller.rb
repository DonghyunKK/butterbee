class CakeOrdersController < ApplicationController
  before_action :order_params, only: [:create]

  def new
    @cakes = Cake.pluck(:name, :item_code)
    @cakes_list = @cakes.map do |name, item_code|
      "#{name} / #{item_code}"
    end
    @cake_order = CakeOrder.new
  end

  def create
    @cake_order = CakeOrder.new(params[:cake_order])
      # unless params[:photos].nil?
      #   params[:photos].each do |pic|
      #   @cake_order.photos << CakeOrder.create(:photo => pic.tempfile, :filename => pic.original_filename, :mime_type => pic.content_type, :photo_name => pic.original_filename)
      #  end
      # end
    @cake_order.request = request
    if @cake_order.deliver
      flash.now[:notice] = 'Thank you for your message!'
      redirect_to(root_path)
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
      # redirect_to(new_cake_order_path)
    end
  end

  private

  def order_params
    params.require(:cake_order).permit(:name, :email, :message, :nickname, :captcha, :size, :flavour, :cake_design, :due_date, :collection, :address, :postcode, :photos)
  end
end
