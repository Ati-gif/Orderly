class Api::CategoriesController < ApplicationController
    before_action :set_room
    before_action :set_category, only: [:show, :edit, :update, :destroy]
  
    def index
        render json: @room.categories
    end
  
    def show
      category = Category.find(params[:id])
      render json: category
    end
  
    def create
      @category = Category.new(category_params)
  
      if @category.save
        render json: [@room, @category]
      else
        render :new
      end
    end
  
    def update
      if @category.update(category_params)
        render json: [@room, @category]
      else
        render :edit
      end
    end
  
    def destroy
      @category.destroy
      render json: room_categories_path(@room)
    end
  
    private
      def set_room
        @room = Room.find(params[:id])
      end
  
      def set_category
        @category = Product.find(params[:id])
      end
  
      def category_params
        params.require(:category).permit(:name)
      end
    end
