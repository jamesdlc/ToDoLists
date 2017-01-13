class TodolistsController < ApplicationController
  before_action :find_todolist, only: [:show, :update, :destroy]

  # GET /todolists
  # GET /todolists.json
  def index
    @todolists = Todolist.all
  end

  # GET /todolists/1
  # GET /todolists/1.json
  def show
  end

  # POST /todolists
  # POST /todolists.json
  def create
    @todolist = Todolist.new(todolist_params)

    if @todolist.save
      render :show, status: :created, location: @todolist
    else
      render json: @todolist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todolists/1
  # PATCH/PUT /todolists/1.json
  def update
    if @todolist.update(todolist_params)
      render :show, status: :ok, location: @todolist
    else
      render json: @todolist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todolists/1
  # DELETE /todolists/1.json
  def destroy
    @todolist.listitems.destroy_all
    @todolist.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_todolist
      @todolist = Todolist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todolist_params
      params.require(:todolist).permit(:name)
    end
end
