class CupcakeOrdersController < ApplicationController
  before_action :order_params, only: [:create]

  def new
    @cupcakes = Cupcake.pluck(:name, :item_code)
    @cupcakes_list = @cupcakes.map do |name, item_code|
      "#{name} / #{item_code}"
    end
    @cupcake_order = CupcakeOrder.new
  end

  def create
    @cupcake_order = CupcakeOrder.new(params[:cupcake_order])
    @cupcake_order.request = request
    if @cupcake_order.deliver
      # flash.now[:notice] = 'Thank you for your message!'
      redirect_to(confirm_path)
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

  private

  def order_params
    params.require(:cupcake_order).permit(:name, :email, :number, :message, :nickname, :captcha, :boxes, :flavour, :cupcake_design, :due_date, :collection, :recipient_name, :address, :postcode, :contact_number, :photo1, :photo2, :photo3)
  end
end