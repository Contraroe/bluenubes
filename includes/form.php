<div id="mailform">
  <h1>Any questions ?</h1>
	<form method="post" action="php/mailform.php">
    <label for="company">Company</label>
    <input type="text" name="company" placeholder="company" id="company" title="Company name" required="company" />

		<label for="name">Name</label>
		<input type="text" name="name" placeholder="name" id="name" title="Fullname" required="name" />
	
		<label for="adress">Adress</label>
		<input type="text" name="adress" placeholder="adress" id="adress" title="Address" required="adress" />
 		
 		<label for="email">E-mail</label>
 		<input type="text" name="email" placeholder="email" id="email" title="Email" required="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
		
 		<label id="message" for="message">Message</label>
 		<textarea name="message" rows="10" cols="60" id="message" class="b"></textarea>
 		
 		<input type="submit" name="submit" value="Send" class="submit-button" onmouseover="this.className='btn btnhov'" onmouseout="this.className='submit-button'" />
 	</form>
</div>

<script src="js/formval.js" type="text/javascript"></script>