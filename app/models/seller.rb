class Seller < ApplicationRecord
  has_many :buyers, dependent: :destroy
  has_many :products, dependent: :destroy

  def self.seller_products
    # SELECT sellers.id, name, email, COUNT(*) as product_num FROM sellers
    # INNER JOIN products AS p ON p.seller_id = sellers.id
    # GROUP BY sellers.id, name, email
    select('sellers.id, name, email, COUNT(*) as product_num')
    .joins('INNER JOIN products AS p ON p.seller_id = sellers.id')
    .group('sellers.id, name, email')
  end
end
