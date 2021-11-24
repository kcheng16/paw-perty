# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  city           :string           not null
#  country        :string           not null
#  description    :text             not null
#  images         :string           default([]), is an Array
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
#  index_listings_on_host_id         (host_id)
#  index_listings_on_street_address  (street_address) UNIQUE
#
class Listing < ApplicationRecord
  validates :host_id, :title, :description, :city, :postal_code, :country, :longitude, :latitude, :price, :num_of_beds, presence: true
  validates :street_address, presence: true, uniqueness: true
end
