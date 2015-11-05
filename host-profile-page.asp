<!DOCTYPE html>
<html lang="en">
<head>
	<!-- head - includes/head.asp -->
	<!-- #include file="includes/head.asp" -->

	<title>Guest Plate: Host Profile</title>
</head>

<body>
<section class="page-wrapper">

<!-- header inside - includes/header-inside.asp -->
<!-- #include file="includes/header-inside.asp" -->

<section class="modify-search bg-skin">
	<!-- modify search widget - includes/modify-search-results.asp -->
	<!-- #include file="includes/modify-search-results.asp" -->
</section>

<section class="profile-pg-wrapper">

<!-- host info - includes/profile-host-bio.asp-->
<!-- #include file="includes/profile-host-bio.asp" -->

<!-- host gallery and deals -->
<div class="container">
		<div class="row">
		<!-- left -->
		<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

		<!-- photo section - includes/profile-host-photo.asp-->
		<!-- #include file="includes/profile-host-photo.asp" -->

		<!-- dishes section - includes/profile-dishes.asp-->
		<!-- #include file="includes/profile-dishes.asp" -->

		<!-- review section - includes/profile-host-review.asp-->
		<!-- #include file="includes/profile-host-review.asp" -->

		</div>

		<!-- right -->
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">


		<!-- deals section - includes/profile-deals.asp-->
		<!-- #include file="includes/profile-deals.asp" -->
		
		<!-- hours section - includes/profile-hours.asp-->
		<!-- #include file="includes/profile-hours.asp" -->

		<!-- about section - includes/profile-guest-about.asp-->
		<!-- #include file="includes/profile-guest-about.asp" -->


		</div>
		</div>
	</div>



</section>
<!-- footer - includes/footer.asp-->
<!-- #include file="includes/footer.asp" -->


</section>
<!-- js scripts - includes/scripts.asp-->
<!-- #include file="includes/scripts.asp" -->


<script type="text/javascript">
	$(document).ready(function(){
		//change dishes title to menu in host profile page
		$(".module-dishes .module-title").html("<i class='icon-gp-list-bullet v-align-mid'></i> Menu");
	})
</script>

</body>

</html>
