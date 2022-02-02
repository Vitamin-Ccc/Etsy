class Api::BuyersController < ApplicationController

  def show
    buyer = Buyer.find(params[:id])
    render json: Buyer.desired_categories(buyer.id, buyer.categories)
  end

end
