class ChargesController < ApplicationController
	
	def new
		bill = Bill.last
		
		@amount = bill.amount.to_i
		@amountShow = bill.amount/100

	end

	def create
			bill = Bill.last
			@amount = bill.amount.to_i
			@amountShow = bill.amount/100 

	    customer = Stripe::Customer.create(
	    email: params[:stripeEmail],
	    source: params[:stripeToken]
	  	)

	    charge = Stripe::Charge.create(
	    customer: customer.id,

	    # amount: Bill.last.amount.to_i,
	    amount: @amount,

	    description: 'Rails Stripe customer',
	    currency: 'usd'
	  	)

		rescue Stripe::CardError => e
	  		flash[:error] = e.message
	  		redirect_to new_charge_path
	end
  
end
