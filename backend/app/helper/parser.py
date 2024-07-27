def parse_address(address):
    try:
        parts = address.split(',')
        city = parts[1].strip()
        state_zip = parts[2].strip() if len(parts) > 1 else ''
        state = state_zip.split(' ')[0].strip() if state_zip else ''
        print(f'City: {city}, State: {state}')
        return city, state
    except Exception as e:
        return '', ''