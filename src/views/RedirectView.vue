<template>
  <div class="about">
    <h1>This is a login-protected page</h1>
    <button @click="logout()">logout</button>
    <ul class="claims">
      <li v-for="c in claims" :key="c.key">
        <strong>{{ c.key }}</strong
        >: {{ c.value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return { ...this.$oidc.userProfile, accessToken: this.$oidc.accessToken }
    },
    claims() {
      if (this.user) {
        return Object.keys(this.user).map(key => ({
          key,
          value: this.user[key]
        }))
      }
      return []
    },
      logout() {
      this.$oidc.signOut()
      sessionStorage.clear();
      localStorage.clear();
      }
  }
}
</script>
<style>
.claims {
  list-style: none;
  text-align: left;
}
</style>