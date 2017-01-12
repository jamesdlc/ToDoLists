class ListitemsController < ApplicationController
before_action :find_todolist
before_action :find_listitem, only: [:show, :update, :destroy]

# GET /listitems
# GET /listitems.json
def index
  @listitems = @todolist.listitems
end

# GET /listitems/1
# GET /listitems/1.json
def show
end

# POST /listitems
# POST /listitems.json
def create
  @listitem = listitem.new(listitem_params)

  if @todolist.listitems << @listitem
    render :show, status: :created, location: list_listitem_path(@todolist, @listitem)
  else
    render json: @listitem.errors, status: :unprocessable_entity
  end
end

# PATCH/PUT /listitems/1
# PATCH/PUT /listitems/1.json
def update
  if @listitem.update(listitem_params)
    render :show, status: :ok, location: list_listitem_path(@todolist, @listitem)
  else
    render json: @listitem.errors, status: :unprocessable_entity
  end
end

# DELETE /listitems/1
# DELETE /listitems/1.json
def destroy
  @listitem.destroy
  head :no_content
end

private
  # Use callbacks to share common setup or constraints between actions.
  def find_todolist
    @todolist = Todolist.find(params[:todolist_id])
  end

  def find_listitem
    @listitem = @todolist.listitems.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def listitem_params
    params.require(:listitem).permit(:name, :todolist_id)
  end
end
