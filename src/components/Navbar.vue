<template>
<vk-navbar>
    <vk-navbar-nav slot="left">
        <vk-navbar-nav-item title="Login" href="/#/loginPre"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Register" href="/#/register"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Main" href="/#/"></vk-navbar-nav-item>
        <vk-navbar-nav-dropdown title="Profile">
            <vk-navbar-nav-dropdown-nav>
                <vk-nav-item title="My profile" href="/#/guestmain"></vk-nav-item>
                <vk-nav-item title="Bookings" href="/#/history"></vk-nav-item>
            </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        <vk-navbar-nav-item title="Hotels" href="/#/Hotel1"></vk-navbar-nav-item>
    </vk-navbar-nav>
    <vk-navbar-nav slot="right">
        <vk-navbar-logo slot="left" href="/#/" style="position: relative; left: 30%;"><a><img style="width: 30%;" src="../assets/logo.png"></a></vk-navbar-logo>
    </vk-navbar-nav>
</vk-navbar>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #ffffff;
}
element.style {
    height: 0px;
    margin: 0px;
}
.uk-navbar-center {
    margin-left: 13%;
}
</style>