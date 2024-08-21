<template>
  <nav>
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/howto">如何膜拜</RouterLink>
    <RouterLink to="/why">膜拜的理由</RouterLink>
    <RouterLink to="/wish">許願池</RouterLink>
    <RouterLink to="/contribute">志工招募</RouterLink>
    <a
      href="https://discord.com/channels/508513350964084736/1274986310431674462"
      >聯絡</a
    >
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  gap: 16px;
  color: blue;
  justify-content: center;
}

nav a:hover {
  color: yellow;
}

nav a:visited {
  color: red;
}
</style>
