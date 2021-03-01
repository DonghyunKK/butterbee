class OrdersController < ApplicationController
  before_action :order_params, only: [:create]

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(params[:order])
    @order.request = request
    if @order.deliver
      flash.now[:notice] = 'Thank you for your message!'
      render :new
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

  private

  def order_params
    params.require(:order).permit(:name, :email, :message, :nickname, :captcha)
  end
end
