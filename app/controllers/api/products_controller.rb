class Api::ProductsController < ApplicationController
  def index
    render json: Product.display
  end
end

