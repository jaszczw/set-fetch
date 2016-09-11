if [ -f lib/allegro/private-config.json ]; then
  echo "Allegro private config exists"
else
	echo $ALLEGRO_PRIVATE_CONFIG > lib/allegro/private-config.json
	
	if [ -f lib/allegro/private-config.json ]; then
		echo "Created allegro config"
    else
        echo "Allegro private-config was not created"
	fi
fi