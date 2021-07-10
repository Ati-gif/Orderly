class Api::CategoriesController < ApplicationController

  

  before_action :set_category, only: [:show, :edit, :update, :destroy]

  def index
    render json: Category.all
  end

  def show
    render json: @category
  end

  def create
    @category = @category.new(category_params)

    if @category.save
      render json: [@category]
    else
      render :new
    end
  end

  def update
    if @category.update(category_params)
      render json: [@category]
    else
      render :edit
    end
  end

  def destroy
    @category.destroy
    render json: category_path(@category)
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end
