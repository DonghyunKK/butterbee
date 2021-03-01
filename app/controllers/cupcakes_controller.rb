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
    # associate current user to prevent user must exist error
    # @cupcake = current_user.cupcakes.build(cupcake_params)
    @cupcake = Cupcake.new(cupcake_params)
    @cupcake.user = current_user
    if @cupcake.save!
      redirect_to cupcakes_path
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
    redirect_to cupcake_path(@cupcake)
  end

  def destroy
    @cupcake = Cupcake.find(params[:id])
    @cupcake.destroy
    redirect_to cupcakes_path
  end

  def move
    @cupcake = Cupcake.find(params[:id])
    @cupcake.insert_at(params[:position].to_i)
  end

  private

  def cupcake_params
    params.require(:cupcake).permit(:name, :item_code, :seasonal, photos: [])
  end
end
