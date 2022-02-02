class Api::ProductsController < ApplicationController

  def index
    render json: Product.by_seller
  end

  def get_categories
    render json: Product.get_categories
  end

  def category
    render json: Product.by_category(params[:city])
  end

end

