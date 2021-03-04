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
    @cake_order.request = request
    if @cake_order.deliver
      flash.now[:notice] = 'Thank you for your message!'
      render :new
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
      # redirect_to(new_cake_order_path)
    end
  end

  private

  def order_params
    params.require(:cake_order).permit(:name, :email, :message, :nickname, :captcha, :size, :flavour, :cake_design, :due_date, :collection, :address, :postcode)
  end
end