class CupcakesController < ApplicationController
  def index
    @cupcakes = Cupcake.all
  end

  def show
    @cupcake = Cupcake.find(params[:id])
  end

  def new
    @cupcake = Cupcake.new
  end

  def create
    @cupcake = Cupcake.new(cupcake_params)
    if @cupcake.save
      redirect_to cupcake_path(@cupcake)
    else
      render 'new'
    end
  end

  def edit
    @cupcake = Cupcake.find(params[:id])
  end

  def update
    @cupcake = Cupcake.find(params[:id])
    @cupcake.update(cupcake_params)
  end

  def destroy
    @cupcake = Cupcake.find(params[:id])
    @cupcake.destroy
    redirect_to cupcakes_path
  end

  private

  def cupcake_params
    params.require(:cupcake).permit(:name, :item_code)
  end
end
