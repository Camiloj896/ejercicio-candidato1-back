<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> User </span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> Vue Bootstrap </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Task Reports </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/vue-bootstrap/alert"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Alert </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/badge"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Badge </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/button"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Button </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/button-group"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Button Group </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/button-toolbar"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Button Toolbar </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/card"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Card </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/carousel"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Carousel </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Profit Margins </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/vue-bootstrap/collapse"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Collapse </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/dropdown"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Dropdown </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/embed"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Embed </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-checkbox"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Checkbox </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-file"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form File </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-group"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Group </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-input"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Input </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Staff Management </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/vue-bootstrap/form-radio"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Radio </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-select"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Select </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/form-textarea"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Form Textarea </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/image"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Image </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/input-group"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Input Group </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/jumbotron"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Jumbotron </span>
                    </a>
                  </li>
                </router-link>
                <li aria-haspopup="true" class="menu-item">
                  <a
                    href="#/vue-bootstrap/layout-grid-system"
                    class="menu-link"
                  >
                    <i class="menu-bullet menu-bullet-dot"><span></span></i>
                    <span class="menu-text"> Layout Grid System </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Tools </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/vue-bootstrap/link"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Link </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/list-group"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> List Group </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/media"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Media </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/modal"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Modal </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/nav"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Nav </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/navbar"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Navbar </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/pagination"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Pagination </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/pagination-nav"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Pagination Nav </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Misc </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/vue-bootstrap/popover"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Popover </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/progress"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Progress </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/spinner"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Spinner </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/table"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Table </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/tabs"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Tabs </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/toasts"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Toasts </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/tooltip"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> Tooltip </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
