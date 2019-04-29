class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html
      format.json { @latest_messages = @messages.where("id > ?",params[:id]) }
    end
  end
end