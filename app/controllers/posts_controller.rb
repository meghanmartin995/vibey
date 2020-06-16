class PostsController < ApplicationController
  def like
    @post = Post.find(params[:id])
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
    @voter.likes @post
    flash[:message] = 'Like added!'
    respond_to do |format|
      format.html
      format.js
    end
  end
end
