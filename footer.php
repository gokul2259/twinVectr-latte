		<?php 
		$siteName = get_option( 'blogname' );
		?>
		<footer class="footer" id="footer">
			<div class="row">
				<div class="col-md-12">
					<?php echo get_option( 'blogname' ).' © 2018. All rights reserved. WordPress'; ?>
				</div>
			</div>
		</footer>
	</div>
<?php wp_footer(); ?>
 </body>
</html>
