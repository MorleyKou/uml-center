<template>
  <f7-page name="certification">
    <f7-navbar title="certification" back-link="Back">
      <f7-nav-right>
        <f7-link href="/applyCertification/" icon-ios="f7:person" icon-aurora="f7:person" icon-md="material:create" ></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>Certification List</f7-block-title>
    <f7-block strong>
      <f7-block-title>Degree</f7-block-title>
      <f7-list media-list>
        <f7-list-item
          link="#"
          title="Computer science degree"
          after="31/06/2015"
          subtitle="Macao Polytechnic Institute"
          text=" "
        >
          <img slot="media" src="https://images.app.goo.gl/uMK6nbqXcb3AyKG16" width="80" />
        </f7-list-item>
      </f7-list>

      <f7-block-title>Course</f7-block-title>
      <f7-list media-list>
        <f7-list-item
          link="#"
          title="Blockchain fundamentals"
          after="28/12/2019"
          subtitle="CPTTM"
      >
          <img slot="media" src="https://images.app.goo.gl/hSDX956uCKgevTXQA" width="80" />
        </f7-list-item>
      </f7-list>

    </f7-block>

  </f7-page>
</template>
