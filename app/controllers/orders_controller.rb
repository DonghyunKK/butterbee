class OrdersController < ApplicationController
  def new
    @order = Order.new
  end

  def create
    @order = Order.new(params[:order])
    @order.request = request
    if @order.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = 'Can not send message.'
      render :new
    end
  end
end
