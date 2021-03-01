class OrdersController < ApplicationController
  def new
    @order = Order.new
  end

  def create
    @order = Order.new(params[:order])
    @order.request = request
    if @order.deliver
      flash.now[:error] = nil
      render :new
    else
      flash.now[:error] = 'Can not send message.'
      render :new
    end
  end
end
