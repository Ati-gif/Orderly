class Api::RoomsController < ApplicationController
  before_action :set_room, only: [:show, :edit, :update, :destroy]
  def index
    render json: Room.all
  end
  def show
    render json: @room
  end
  def create
    @room = @room.new(room_params)
    if @room.save
      render json: [@room]
    else
      render :new
    end
  end
  def update
    if @room.update(room_params)
      render json: [@room]
    else
      render :edit
    end
  end
  def destroy
    @room.destroy
    render json: room_path(@room)
  end
  private
  def set_room
    @room = Room.find(params[:id])
  end
end
