# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  cat_friendly   :boolean          not null
#  city           :string           not null
#  country        :string           not null
#  description    :text             not null
#  latitude       :float            not null
#  longitude      :float            not null
#  num_of_beds    :integer          not null
#  postal_code    :integer          not null
#  price          :integer          not null
#  street_address :string           not null
#  title          :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  host_id        :integer          not null
#
# Indexes
#
#  index_listings_on_host_id         (host_id) UNIQUE
#  index_listings_on_street_address  (street_address) UNIQUE
#
class Listing < ApplicationRecord
end
