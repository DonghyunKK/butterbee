class CakesController < ApplicationController
  def index
    @cakes = Cake.all
  end

  def show
    @cake = Cake.find(params[:id])
  end

  def new
    @cake = Cake.new
  end

  def create
    # associate current user to prevent user must exist error
    # @cake = current_user.cakes.build(cake_params)
    @cake = Cake.new(cake_params)
    @cake.user = current_user
    if @cake.save!
      redirect_to cakes_path
    else
      render 'new'
    end
  end

  def edit
    @cake = Cake.find(params[:id])
  end

  def update
    @cake = Cake.find(params[:id])
    @cake.update(cake_params)
    redirect_to cake_path(@cake)
  end

  def destroy
    @cake = Cake.find(params[:id])
    @cake.destroy
    redirect_to cakes_path
  end

  def move
    @cake = Cake.find(params[:id])
    @cake.insert_at(params[:position].to_i)
  end

  private

  def cake_params
    params.require(:cake).permit(:name, :item_code, photos: [])
  end
end
