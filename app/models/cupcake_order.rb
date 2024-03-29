class CupcakeOrder < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :number
  attribute :boxes
  attribute :flavour
  attribute :cupcake_design
  attribute :message
  attribute :due_date, validate: true
  attribute :collection, validate: ["Pick Up", "Delivery"]
  attribute :recipient_name
  attribute :address
  attribute :postcode
  attribute :contact_number
  attribute :photo1, attachment: true
  attribute :photo2, attachment: true
  attribute :photo3, attachment: true
  attribute :nickname, captcha: true

  def headers
    {
      #this is the subject for the email generated, it can be anything you want
      subject: "My Cupcake Order Form",
      to: 'butterbeebakerylondon@outlook.com',
      from: %("#{name}" <#{email}>)
      #the from will display the name entered by the user followed by the email
    }
  end
end
