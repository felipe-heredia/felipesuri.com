<template>
  <strong>
    <g-link to="/">{{ $static.metadata.siteName }}</g-link>
  </strong>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
