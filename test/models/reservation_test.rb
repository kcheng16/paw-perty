# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  end_date      :datetime         not null
#  num_of_guests :integer          not null
#  start_date    :datetime         not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  guest_id      :integer          not null
#  listing_id    :integer          not null
#
# Indexes
#
#  index_reservations_on_guest_id    (guest_id)
#  index_reservations_on_listing_id  (listing_id)
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
