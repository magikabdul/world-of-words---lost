package cloud.cholewa.worldofwords.core.configuration;

import cloud.cholewa.worldofwords.core.exceptions.UserNotFoundException;
import cloud.cholewa.worldofwords.user.boundary.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userRepository.findByUserName(s).orElseThrow(() -> new UserNotFoundException("User " + s + " in database"));
    }
}
