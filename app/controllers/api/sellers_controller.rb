class Api::SellersController < ApplicationController

  def index
    render json: Seller.seller_products
  end

  def show
    render json: Seller.find(params[:id]).buyers
  end

end
