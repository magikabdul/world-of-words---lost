package cloud.cholewa.wow.configuration;

import cloud.cholewa.wow.teacher.boundary.TeacherRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private TeacherRepository teacherRepository;

    public UserDetailsServiceImpl(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return teacherRepository.findByUserName(s).orElseThrow(() -> new UsernameNotFoundException("User " + s + " not found"));
    }
}
