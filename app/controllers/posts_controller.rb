class PostsController < ApplicationController
  def like
    @post = Post.find(params[:id])
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])

    if @voter.voted_for? @post
      @post.unliked_by @voter
    else
      @post.liked_by @voter
    end
    respond_to do |format|
      format.html
      format.js
    end
  end
end
