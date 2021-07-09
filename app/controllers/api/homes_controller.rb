class Api::HomesController < ApplicationController
  before_action :home, only: [:show, :edit, :update, :destroy]

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

  def destroy
    @home.destroy
    render json: home_path(@home)
  end

  private

  def home
    @home = Home.find(params[:id])
  end

  def home_params
    params.require(:home).permit(
      :main_title, 
      :home_img, 
      :main_description,
    )
  end
end



