class Product < ApplicationRecord
  belongs_to :seller

  # Select products.id, price, description, category, s.id AS seller_id, s.name, s.email
  # From products
  # INNER JOIN sellers as s ON s.id = products.seller_id
  # order by s.id;

  def self.by_seller
    select('products.id, price, description, category, s.id as seller_id, s.name, s.email')
    .joins('INNER JOIN sellers as s ON s.id = products.seller_id')
    .order('s.id')
  end
  
  def self.get_categories
    categories = select('DISTINCT category')
    categories.map do |category|
      category.category
    end
  end

  def self.by_category(category)
    select('products.id, price, description, category, s.id as seller_id, s.name, s.email')
    .joins('INNER JOIN sellers as s ON s.id = products.seller_id')
    .order('category')
  end


end
