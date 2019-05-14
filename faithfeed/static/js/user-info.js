let userInfo = {
    template:`<div class="container">
    <div class="row">
        <div class="col-lg">
           First Name
        </div>
        <div class="col-lg">
            {{user.firstName}}
        </div>
    </div>
    <div class="row">
        <div class="col-lg">
            Last Name:
        </div>
        <div class="col-lg">
            {{user.lastName}}
        </div>
    </div>
    <hr />
    <h4>
        Contact:
    </h4>
    <div class="row">
        <div class="col-lg">
            Phone:
        </div>
        <div class="col-lg">
            {{user.phone}}
        </div>
    </div>
    <div class="row">
        <div class="col-lg">
            Email:
        </div>
        <div class="col-lg">
            {{user.email}}
        </div>
    </div>
    <button @click="addSocialAccount"><i class="fas fa-plus"></i>add social account</button>
</div>`,
}