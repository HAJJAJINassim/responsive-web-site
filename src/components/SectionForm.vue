<template>
      <section class="section-form">
      <div class="row">
        <h2>We're happy to hear from you</h2>
      </div>
      <div class="row">
        <form method="post" action="#" class="contact-form">
          <div class="row">
            <div class="col span-1-of-3"><label for="name">Name</label></div>
            <div class="col span-2-of-3">
              <input type="text" name="name" id="name" placeholder="Your name" required>
            </div>
          </div>
          <div class="row">
            <div class="col span-1-of-3"><label for="email">Email</label></div>
            <div class="col span-2-of-3">
              <input type="email" name="email" id="email" placeholder="Your email" required>
            </div>
          </div>
          <div class="row">
            <div class="col span-1-of-3"><span for="find-us">How did you find us</span></div>
            <div class="col span-2-of-3">
              <select name="find-us" id="find-us">
                <option value="friends">Friends</option>
                <option value="internet" selected>Intenet</option>
                <option value="other" selected>Other</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col span-1-of-3"><label for="news">Newsletter</label></div>
            <div class="col span-2-of-3">
              <input type="checkbox" name="news" id="news" checked> Yes please.
            </div>
          </div>
          <div class="row">
            <div class="col span-1-of-3"><label>Drop us a line</label></div>
            <div class="col span-2-of-3">
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col span-1-of-3"><label><pre> </pre></label></div>
            <div class="col span-2-of-3">
              <input type="submit" value="send it!">
            </div>
          </div>
        </form>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* FORM */
.contact-form{
  width: 60%;
  margin: 0 20%;
}
input[type=text],
input[type=email],
select,
textarea{
  width: 100%;
  padding: 7px;
  border: 1px solid #ccc;
}
.section-form .row {
  margin-bottom: 20px;
}
input[type=checkbox]{
  margin: 10px 5px 10px 0px;
}
*:focus{
  outline: none;
}
</style>