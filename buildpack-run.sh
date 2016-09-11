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

if [ -f lib/brickset/private-config.json ]; then
  echo "Brickset private config exists"
else
	echo $BRICKSET_PRIVATE_CONFIG > lib/brickset/private-config.json

	if [ -f lib/brickset/private-config.json ]; then
		echo "Created brickset config"
    else
        echo "Brickset private-config was not created"
	fi
fi
if [ -f lib/rebrickable/private-config.json ]; then
  echo "Rebrickable private config exists"
else
	echo $REBRICKABLE_PRIVATE_CONFIG > lib/rebrickable/private-config.json

	if [ -f lib/rebrickable/private-config.json ]; then
		echo "Created rebrickable config"
    else
        echo "Rebrickable private-config was not created"
	fi
fi