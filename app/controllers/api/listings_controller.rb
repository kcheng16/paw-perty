# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
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
class Api::ListingsController < ApplicationController
  
  def index
    # @listings = Listing.all

    # render :index
    @listings = Listing.with_attached_photos.all
    if params[:city]
      @listings = Listing.where(city: params[:city])
      render :index
    else 
        render :index
    end
  end

  def create
    @listing = Listing.new(listing_params)
    
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def show
    @listing = Listing.with_attached_photos.find_by(id: params[:id])
  end

  def update
    @listing = Listing.find_by(id: params[:id])

    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find(params[:id])

    if @listing.destroy
      render json: ['Successfully deleted the listing.']
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def search
    if params[:searchValue].length == 0
      render json: { search_results: [] }
    else
      @cities = listing.group(:city).select(:city)
      debugger
      # @listings = listing.where(
      #   "lower(city) LIKE ?", 
      #   "%#{params[:searchValue].downcase}%",
      # )
      
      render :search_result
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :host_id, 
      :title, 
      :description, 
      :street_address, 
      :city, 
      :postal_code, 
      :country, 
      :longitude, 
      :latitude, 
      :price, 
      :num_of_beds, 
      photos: []
    )
  end

end
