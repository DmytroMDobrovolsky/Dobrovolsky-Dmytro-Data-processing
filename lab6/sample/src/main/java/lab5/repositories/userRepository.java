package lab5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import lab5.entity.User;

@CrossOrigin(origins = "*")
public interface userRepository extends JpaRepository<User, Integer> {

//  List<User> findByLastName(@Param("name") String name);

}