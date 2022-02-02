class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :categories, Array

  # SELECT price, buyers.id, buyers.name, max_price, categories, s.name AS seller_name
  # FROM buyers
  # INNER JOIN sellers AS s ON s.id = buyers.seller_id
  # INNER JOIN products AS p ON p.seller_id = s.id AND p.price < buyers.max_price AND category = ANY('{"Home", "Clothing"}')
  # WHERE buyers.id = 322

  def self.desired_categories(id, categories)
    select('price, description, category, buyers.id, buyers.name, max_price, categories, s.name AS seller_name')
    .joins("INNER JOIN sellers AS s ON s.id = buyers.seller_id
    INNER JOIN products AS p ON p.seller_id = s.id 
    AND p.price < buyers.max_price
    AND category = ANY('{#{categories.join(',')}}')")
    .where("buyers.id = ?", id)
  end
end
