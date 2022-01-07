class Product < ApplicationRecord
  belongs_to :seller

  # Select products.id, price, description, category, s.id AS seller_id, s.name, s.email
  # From products
  # INNER JOIN sellers as s ON s.id = products.seller_id
  # order by s.id;

  def self.display
    select('products.id, price, description, category, s.id as seller_id, s.name, s.email')
    .joins('INNER JOIN sellers as s ON s.id = products.seller_id')
    .order('s.id')
  end
end
