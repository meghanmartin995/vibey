class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
      flash[:alert] = 'Message sent!'
    else
      redirect_to root_path
      flash[:alert] = 'Message not sent :('
    end
  end

  private

  def message_params
    params.require(:message).permit(:note)
  end
end
