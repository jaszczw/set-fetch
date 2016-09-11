if [ -f lib/brickset/private-config.json ]; then
  echo "file exists"
else
	$ALLEGRO_PRIVATE_CONFIG > lib/allegro/private-config.json
	
	if [ -f lib/brickset/private-config.json ]; then
		echo "Created allegro config"
	fi
fi