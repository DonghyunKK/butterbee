class CakeOrder < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :size
  attribute :collection, validate: ["Pick Up", "Delivery"]
  attribute :flavour
  attribute :cake_design
  attribute :address
  attribute :postcode
  attribute :due_date, validate: true
  attribute :photo, attachment: true
  attribute :nickname, captcha: true

  def headers
    {
      #this is the subject for the email generated, it can be anything you want
      subject: "My Order Form",
      to: 'donghyunkim524@gmail.com',
      from: %("#{name}" <#{email}>)
      #the from will display the name entered by the user followed by the email
    }
  end
end
