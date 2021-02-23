class PagesController < ApplicationController
  def home
    @seasonal_cake = Cake.find_by(seasonal: true)
    @seasonal_cupcake = Cupcake.find_by(seasonal: true)
  end
end
