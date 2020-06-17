class PagesController < ApplicationController
  def home
    @home_page = true
    session[:voting_id] = request.remote_ip
    @voter = Session.find_or_create_by(ip: session[:voting_id])
  end

  def covid
  end

  def fancier
  end

  def thirtydays
  end

  def replastic
  end

  def fonts
  end

  def freelance
  end
end
