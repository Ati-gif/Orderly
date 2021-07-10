class Api::HomesController < ApplicationController
  before_action :home, only: [:update, :show]

  def index
    render json: Home.all
  end

  def show
    render json: @home
  end

  def update
    if @home.update(home_params)
      render json: @home
    else
      render json: {errors: @home}, status: 422
    end
  end

  private

  def home
    @home = Home.find(params[:id])
  end

  def homee_params
    params.require(:home).permit(
      :main_title, 
      :home_img, 
      :main_description,
    )
  end
end


